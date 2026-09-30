# web

Sitio de Daily News: landing page y ejemplo de edición diaria.

Stack: Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Desarrollo

```bash
cp .env.example .env.local   # y completa las variables
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

- `/` — landing page del producto
- `/ejemplo` — ejemplo de una edición diaria con audio narrado

## Variables de entorno

Ver [.env.example](.env.example). Ninguna es requerida para desarrollo local
(hay valores por defecto), pero `NEXT_PUBLIC_WHATSAPP_URL` y
`NEXT_PUBLIC_SITE_URL` deben apuntar a los valores reales en producción.

## Deploy

Recomendado: [Vercel](https://vercel.com) — conecta el repo, sin
configuración adicional (detecta Next.js automáticamente). Define las
variables de entorno del `.env.example` en el dashboard del proyecto.

Alternativa en AWS: [Amplify Hosting](https://aws.amazon.com/amplify/hosting/)
soporta Next.js con SSR de forma similar a Vercel. Para más control (ECS,
CloudFront, etc.) se puede usar `output: "standalone"` en `next.config.ts` y
un Dockerfile — no incluido aún, agregar si se decide ese camino.
