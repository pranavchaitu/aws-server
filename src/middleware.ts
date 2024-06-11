export async function authMiddleware(c : any, next : any) {
    if(c.req.header('Authorization')) {
        const initTime = new Date()
        await next()
        const totalTime = (new Date().getTime() - initTime.getTime())/1000
        console.log(`it takes ${totalTime} seconds`);
    } else {
        return c.text("you're not authenticated")
    }
}