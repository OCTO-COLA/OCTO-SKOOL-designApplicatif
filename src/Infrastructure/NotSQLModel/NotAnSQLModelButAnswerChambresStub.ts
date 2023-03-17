import {IChambre} from "../../domain/Entities/Chambre/IChambre";
import {IRegistreDesChambres} from "../../domain/Repository/IRegistreDesChambres";

export class NotAnSQLModelButAnswerChambresStub implements IRegistreDesChambres
{
    private listeDesChambre: IChambre[] = []

    constructor(listeDesChambre:IChambre[]) {
        this.listeDesChambre = listeDesChambre
    }

    public getListeDesChambres(): IChambre[] {
        return this.listeDesChambre
    }
}