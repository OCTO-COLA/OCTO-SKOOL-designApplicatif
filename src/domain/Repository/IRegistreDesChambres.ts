import * as csvParser from "csv-parser";
import * as fs from "fs";
import * as path from "path";
import {IChambre} from "../Entities/Chambre/IChambre";

export interface IRegistreDesChambres {
    getListeDesChambres(): IChambre[]
}