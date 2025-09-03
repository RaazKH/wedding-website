export interface RsvpFormData {
  name: string
  email: string
  attending: boolean | null
  attending_names: string[]
  comments: string
}

export interface RsvpRecord {
  id: string
  name: string
  email: string
  attending: boolean
  attending_names: string[] | null
  comments: string | null
  created_at: string
}