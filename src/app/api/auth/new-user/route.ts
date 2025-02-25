import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Crie uma nova instância Svix com segredo
  const wh = new Webhook(SIGNING_SECRET);

  // Obtem cabeçalhos
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // Se não houver cabeçalhos, erro
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Obtem corpo
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verifique a carga útil com cabeçalhos
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  try {
    switch (evt.type) {
      case "user.created":
        await prisma.user.create({
          data: {
            id: evt.data.id,
          },
        });
        break;
      case "user.updated":
        await prisma.user.update({
          where: {
            id: evt.data.id,
          },
          data: {
            id: evt.data.id,
          },
        });
        break;
      case "user.deleted":
        await prisma.user.delete({
          where: {
            id: evt.data.id,
          },
        });
        break;
      default:
        console.log("Unhandled event type:", evt.type);
        break;
    }
  } catch (err) {
    console.error("Error: Could not handle webhook event:", err);
    return new Response("Error: Could not handle webhook event", {
      status: 400,
    });
  }

  // Faça algo com carga útil
  // Para este guia, registre a carga útil no console
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
  console.log("Webhook payload:", body);

  return new Response("Webhook received", { status: 200 });
}
