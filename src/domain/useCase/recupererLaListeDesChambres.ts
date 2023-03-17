import {IChambre} from "../Entities/Chambre/IChambre";
import {IRegistreDesChambres} from "../Repository/IRegistreDesChambres";

export class RecupererLaListeDesChambres {
    private registreDesChambres: IRegistreDesChambres;

    constructor(registreDesChambres: IRegistreDesChambres) {
        this.registreDesChambres = registreDesChambres;
    }

    public execute(): IChambre[] {
        return this.registreDesChambres.getListeDesChambres()
    }
}