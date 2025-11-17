import { LightningElement } from 'lwc';
import PROFILE_IMAGE from '@salesforce/resourceUrl/profileImage2023';

export default class Profile extends LightningElement {
    fullname = 'Nury Amanmadov';
    title = 'Infrastructure Engineer';
    imageDescription = 'Profile image for Nurmyrat Amanmadov';
    imageUrl = PROFILE_IMAGE;
}