import { Player } from "../interfaces/player.interface";
import itemModel from "../models/item";

const insertPlayer = async (item: Player) => {
    const responseInsert = await itemModel.create(item)
    return responseInsert;
}

const getPlayers = async () => {
    const responseItem = await itemModel.find({});
    return responseItem;
}

const getPlayer = async (id:string) => {
    const responseItem = await itemModel.findOne({_id:id});
    return responseItem;
}

const updatePlayer = async (id:string, data: Player) => {
    const responseItem = await itemModel.findOneAndUpdate({_id:id}, data, {new: true});
    return responseItem;
}

const deletePlayer = async (id:string) => {
    const responseItem = await itemModel.findOneAndRemove({_id:id});
    return responseItem;
}

export {insertPlayer, getPlayers, getPlayer, updatePlayer, deletePlayer};