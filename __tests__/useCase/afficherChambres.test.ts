import * as path from "path";
import { AfficherLesChambres } from '../../src/useCase/afficherLesChambres'

describe('Affichage des chambres', () => {
    it('Doit pouvoir afficher la liste des chambres', () => {
        // given
        const filePath = "../../__tests__/fixture/fixturesHotellerie.csv"
        const afficherLesChambres = new AfficherLesChambres()
        afficherLesChambres.readACSV(filePath)
        const expected = ''
        // when
        // then
        console.log(afficherLesChambres.result)
        expect(afficherLesChambres.result).toBe(expected)

    });
})