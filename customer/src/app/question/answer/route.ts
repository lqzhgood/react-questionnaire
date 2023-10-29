import { NextResponse, NextRequest } from 'next/server';

// export async function GET(req: NextRequest, { params }: { params: Record<string, string | string | undefined[]> }) {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   });
//   const data = await res.json();

//   return NextResponse.json({ data })
// }

export async function POST(req: NextRequest, res: NextResponse) {
    const formData = await req.formData();
    // formData.get('')

    return NextResponse.json({ formData });
}
