import {IChambre} from "../../domain/Entities/Chambre/IChambre";
import {IRegistreDesChambres} from "../../domain/Repository/IRegistreDesChambres";

export class NotAnSQLModelButAnswerChambres implements IRegistreDesChambres
{
    public getListeDesChambres(): IChambre[] {
        return [
            {etage: 1, chambre: 101, description: 'exercise purpose', capacite: 2, prix: 120},
            {etage: 1, chambre: 102, description: 'exercise purpose', capacite: 1, prix: 90}
        ]
    }
}