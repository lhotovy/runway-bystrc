export const BankAccountDetails = ({ data }: { data: any }) => {
    return (
        <div className="bg-gray-50 p-6 rounded-lg w-full max-w-md">
            <h3 className="font-semibold text-lg mb-4 text-center">{data.bankAccountTitle}</h3>
            <div className="space-y-3 text-center">
                <div>
                    <p className="text-sm text-gray-600">{data.bankName}</p>
                    <p className="font-mono text-lg font-semibold">{data.accountNumber}</p>
                </div>
                <p className="text-sm text-gray-600">{data.note}</p>
            </div>
        </div>
    )
}
