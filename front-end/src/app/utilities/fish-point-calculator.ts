import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FishCalculationInfo } from '../models/fish-calculation-info';
import { FindState } from './find-state';
import { fishBaseValues, fishRecords } from '../data/fish-data';

@Injectable({
  providedIn: 'root',
})
export class FishPointCalculator {
    constructor(
        private FindState: FindState
      ){}

  async calculatePoints(catchDetails: FormGroup) {
    const species: string = catchDetails.value.speciesControl.toLowerCase() as string;
    const weight = catchDetails.value.weightContol;
    const lure = catchDetails.value.lureControl.toLowerCase();
    const location = catchDetails.value.weatherLocation;
    const state = await FindState.getStateFromLatLng(location.latitude, location.longitude);
    let lureBonus = 0;
    let score = 0;
    let fish:FishCalculationInfo = {
        maxWeight: 0,
        base: 0
    };

    if(state !== null){
        fish = {
            maxWeight: fishRecords[species][state],
            base: fishBaseValues[species]
        }
    }

    if(lure !== 'live'){
        lureBonus = 50;
    }

    score = fish.base * ((weight*10)/fish.maxWeight) + lureBonus;
    score = Math.round(score);
    console.log(score)
}
}

