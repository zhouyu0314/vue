class Area {

    constructor(id, codeName, codeNo, parentId) {
        this._id = id;
        this._codeName = codeName;
        this._codeNo = codeNo;
        this._parentId = parentId;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get codeName() {
        return this._codeName;
    }

    set codeName(value) {
        this._codeName = value;
    }

    get codeNo() {
        return this._codeNo;
    }

    set codeNo(value) {
        this._codeNo = value;
    }


    get parentId() {
        return this._parentId;
    }

    set parentId(value) {
        this._parentId = value;
    }
}