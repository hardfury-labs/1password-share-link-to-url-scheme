'use server';

import { NextResponse } from 'next/server';

interface Params {
  uuid: string;
}

export async function GET(request: Request, context: { params: Params }) {
  const { params } = context;

  const headers = new Headers();
  headers.set('OP-Share-Token', request.headers.get('OP-Share-Token') || '');

  const response = await fetch(`https://share.1password.com/api/v1/share/${params.uuid}`, { headers });

  const resp = await response.json();

  return NextResponse.json(resp, { status: response.status });
}
