import { Request, Response } from "express";
import { insertPlayer, getPlayers, getPlayer, updatePlayer, deletePlayer } from "../services/item";
import { handleHttp } from "../utils/error.handle";


const getItem = async ({params}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await getPlayer(id);
        const data = response ? response : "NOT FOUND"
        res.send(data)
    } catch(e) {
        handleHttp(res, "ERROR_GET_ITEM");
    }

};

const getItems = async (req: Request, res: Response) => {
    try{
        const response = await getPlayers();
        res.send(response)
    } catch(e) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
 
};

const updateItem = async ({params, body}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await updatePlayer(id, body)
        res.send(response);
    } catch(e) {
        handleHttp(res, "ERROR_UPDATE_ITEM");
    }

};

const postItem = async ({body}: Request, res: Response) => {
    try{
        const responseItem = await insertPlayer(body);
        res.send(responseItem);
    } catch(e) {
        handleHttp(res, "ERROR_POST_ITEM", e);
    }

};

const deleteItem = async ({params}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await deletePlayer(id);
        res.send(response)
    } catch(e) {
        handleHttp(res, "ERROR_DELETE_ITEM");
    }

};

export {getItem, getItems, postItem, deleteItem, updateItem}