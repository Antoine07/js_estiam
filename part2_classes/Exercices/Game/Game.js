
export default class Game{

    constructor(p1, p2){
        this._player1 = p1;
        this._player2 = p2;

        this._winner = null;
    }

    get winner(){ return this._winner ;}

    set winner(winner){  
        const { life, name , shot } = winner;

        this._winner = `Name ${name} life : ${Math.floor( life * 100)/100 } shots : ${shot}` ;
    }

    run(){
        // TODO implémenter la logique du jeu

        // tant que les joueurs on de la vie ils se portent des coups
        while(this._player1.life > 0 && this._player2.life > 0){

            // proba de 0.5 de choisir un player
            // disons que si c'est vrai le player1 porte un coup au player2
            if( Math.random() > .5 ){
                this._player2.life -= this._player1.hit();
                this._player1.shot += 1;
            }else{
                this._player1.life -= this._player2.hit();
                this._player2.shot += 1;
            }

            this.winner = this._player1.life > 0 ? this._player1 : this._player2;
        }
    }
}