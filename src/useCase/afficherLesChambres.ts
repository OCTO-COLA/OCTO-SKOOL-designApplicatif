import { parse } from 'csv-parse';
import * as fs from "fs";
import * as path from "path";
import {Chambre} from "../domain/Entities/Chambre/chambre";

export class AfficherLesChambres {
    public result: Chambre[] = [];

    public readACSV(filePath: string): Chambre[]{
        const csvFilePath = path.resolve(__dirname, filePath);
        const headers = ['etage', 'numero', 'description', 'capacite', 'prix'];
        const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

        parse(fileContent, {
            delimiter: ',',
            columns: headers,
        }, (error, result: Chambre[]) => {
            this.result = result
        });
        console.log(this.result)
        return this.result
    }



}