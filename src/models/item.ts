import { Schema, Types, model, Model } from "mongoose";
import { Player } from "../interfaces/player.interface";

const ItemSchema = new Schema<Player>(
    {
        name: {
            type: String,
            required: true
        },
        team: {
            type: String,
            required: true
        },
        nacionality: {
            type:  String,
            required: true
        },
        position: {
            type:  String,
            required: true
        },
        goals: {
            type:  Number,
            required: true
        },
        image: {
            type:  String,
            required: true
        },
        asists: {
            type:  Number,
            required: true
        }
    },
    

    {
        timestamps:true,
        versionKey: false
    }
)

const itemModel = model("items", ItemSchema);
export default itemModel;
