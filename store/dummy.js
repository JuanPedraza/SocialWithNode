const db = {
    'user':[
        {
            id: "1",
            name: 'Marcus Fenix'
        },
        
    ]
}

async function list(table){
    return db[table]
}
async function get(table, id){
    let col = await list(table)
    return col.filter( item => item.id === id) [0] || null
}
async function upsert(table, data){
    db[collection].push(data)
}
async function remove(id,table){
    return true
}


module.exports = {
    list,
    get,
    upsert,
    remove
}