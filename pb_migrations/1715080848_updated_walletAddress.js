/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lglzckuvfx38oku")

  collection.name = "wallets"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lglzckuvfx38oku")

  collection.name = "walletAddress"

  return dao.saveCollection(collection)
})
