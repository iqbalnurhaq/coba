interface DataStore{
    signIn(emai:string,password:string):Promise<any>
}