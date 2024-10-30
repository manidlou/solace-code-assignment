import db from '../db'
import { advocates } from '../db/schema'
import { asc, ilike, or, eq, count } from 'drizzle-orm'
import Advocate from './advocate.interface'
import GetAdvocatesResult from './getAdvocatesResult.interface'
import { isNumber } from '../utils/utils'

const LIMIT = 12

export const getAdvocates = async (
	search: string | null,
	page: number
): Promise<GetAdvocatesResult> => {
	let condition

	if (search) {
		condition = or(
			ilike(advocates.firstName, `%${search}%`),
			ilike(advocates.lastName, `%${search}%`),
			ilike(advocates.city, `%${search}%`),
			ilike(advocates.degree, `%${search}%`),
			isNumber(search)
				? eq(advocates.yearsOfExperience, Number.parseInt(search))
				: undefined
		)
	}

	const rows: Advocate[] = await db
		.select()
		.from(advocates)
		.where(condition)
		.orderBy(asc(advocates.lastName), asc(advocates.id))
		.limit(LIMIT)
		.offset((page - 1) * LIMIT)

	const total: { count: number }[] = await db
		.select({ count: count() })
		.from(advocates)
		.where(condition)

	return { totalRows: total[0].count, rows }
}
