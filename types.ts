interface Endpoint { 
  url: string, 
  response: Record<string, unknown>
}

export type Endpoints = Endpoint[]
