interface IPaymentRequest {
    id: number
    user_id: number
    user: Object
    amount: number
    status: string
    status_fa: string
    type_fa: string
    created_at: string
}