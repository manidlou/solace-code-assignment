import Advocate from './advocate.interface'

export default interface GetAdvocatesResult {
	totalRows: number
	rows: Advocate[]
}
