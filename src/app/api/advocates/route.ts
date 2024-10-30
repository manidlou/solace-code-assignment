import type { NextRequest } from 'next/server'
import { getAdvocates } from '../../../services/advocateService'
import GetAdvocatesResult from '../../../services/getAdvocatesResult.interface'

export async function GET(req: NextRequest) {
	// Uncomment this line to use a database
	// const data = await db.select().from(advocates);

	const search = req.nextUrl.searchParams.get('search') || null
	const page = req.nextUrl.searchParams.get('page') || '1'

	const data: GetAdvocatesResult = await getAdvocates(
		search,
		Number.parseInt(page)
	)

	return Response.json(data)
}
