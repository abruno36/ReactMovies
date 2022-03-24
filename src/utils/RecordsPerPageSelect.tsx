export default function RecordsPerPageSelect(props: recordsPerPageSelectProps) {
    return (
        <div className="mb-3" style={{ width: '130px', marginTop: '0.5rem' }}>
            <label >Records per page:</label>
            <select style={{ marginTop: '0.5rem' }}
                className="form-select"
                defaultValue={5}
                onChange={e => {
                    props.onChange(parseInt(e.currentTarget.value, 10))
                }}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
            </select>
        </div>
    )
}

interface recordsPerPageSelectProps {
    onChange(recordsPerPage: number): void
}