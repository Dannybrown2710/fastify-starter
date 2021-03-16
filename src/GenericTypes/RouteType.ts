export interface RouteType{
    url: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'| 'PATCH'
    handler: (request, reply) => any;
}