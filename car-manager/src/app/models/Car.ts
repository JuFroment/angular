export class Car {
  private _image: string;
  private _nomDeMarque: string;
  private _nomDeModele: string;
  private _status: boolean;


	constructor(image: string, nomDeMarque: string, nomDeModele: string, status: boolean) {
		this._image = image;
		this._nomDeMarque = nomDeMarque;
		this._nomDeModele = nomDeModele;
		this._status = status;
	}


    /**
     * Getter image
     * @return {string}
     */
	public get image(): string {
		return this._image;
	}

    /**
     * Getter nomDeMarque
     * @return {string}
     */
	public get nomDeMarque(): string {
		return this._nomDeMarque;
	}

    /**
     * Getter nomDeModele
     * @return {string}
     */
	public get nomDeModele(): string {
		return this._nomDeModele;
	}

    /**
     * Getter status
     * @return {string}
     */
	public get status(): boolean {
		return this._status;
	}

    /**
     * Setter image
     * @param {string} value
     */
	public set image(value: string) {
		this._image = value;
	}

    /**
     * Setter nomDeMarque
     * @param {string} value
     */
	public set nomDeMarque(value: string) {
		this._nomDeMarque = value;
	}

    /**
     * Setter nomDeModele
     * @param {string} value
     */
	public set nomDeModele(value: string) {
		this._nomDeModele = value;
	}

    /**
     * Setter status
     * @param {string} value
     */
	public set status(value: boolean) {
		this._status = value;
	}


}
