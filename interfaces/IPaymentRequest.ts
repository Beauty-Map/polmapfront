interface IPaymentRequest {
    id: number
    user_id: number
    user: Object
    amount: number
    status: string
    type: string
    created_at: string
}