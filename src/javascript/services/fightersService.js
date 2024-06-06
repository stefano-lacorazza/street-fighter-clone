import callApi from '../helpers/apiHelper';



class FighterService {
    #endpoint = 'fighters.json';

    async getFighters() {
        try {
            const apiResult = await callApi(this.#endpoint);
            return apiResult;
        } catch (error) {
            throw error;
        }
    }


    async getFighterDetails(id) {
        // todo: implement this method
        // endpoint - `details/fighter/${id}.json`;
        // let fighters = this.getFighters();



        try {
            const fighter = await callApi(`details/fighter/${id}.json`);
            console.log(fighter.name);
            return {fighter};

        } catch (error) {
            console.error('Error fetching fighter details:', error);
         
        }
        

        /*
        if (!fighterDetailsMap.has(fighterId)) {
            
            fighterDetailsMap.set(fighterId, fighter);
        }
        console.log(fighterDetailsMap.get(fighterId));
        return fighterDetailsMap.get(fighterId);



        let fighter = getFighterInfo(id);
        
        */


    }
}

const fighterService = new FighterService();

export default fighterService;
