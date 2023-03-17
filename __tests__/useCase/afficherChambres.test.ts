import * as path from "path";
import { RecupererLaListeDesChambres } from '../../src/domain/useCase/recupererLaListeDesChambres'
import {
    NotAnSQLModelButAnswerChambresStub
} from "../../src/Infrastructure/NotSQLModel/NotAnSQLModelButAnswerChambresStub";

describe('Recuperation des chambres', () => {
    it('Doit pouvoir afficher la liste des chambres', () => {
        // given
        const chambresAttendues = [{etage: 1, chambre: 101, description: 'test purpose', capacite: 2, prix: 120}]
        const registreDesChambresStub = new NotAnSQLModelButAnswerChambresStub(chambresAttendues)
        const recupererLaListeDesChambres = new RecupererLaListeDesChambres(registreDesChambresStub)
        // when
        const chambresRecus = recupererLaListeDesChambres.execute()
        // then
        expect(chambresRecus).toBe(chambresAttendues)

    });
})