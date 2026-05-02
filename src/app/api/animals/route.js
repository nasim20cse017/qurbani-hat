import animals from '@/data/animal.json';

export async function GET() {
  return Response.json(animals);
}