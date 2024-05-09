export interface Autorizacao {
    access_token: string
    token_type: 'bearer' | string
    expires_in: number
}