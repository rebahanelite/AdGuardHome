// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IFilterRefreshResponse {
    updated?: number;
}

export default class FilterRefreshResponse {
    readonly _updated: number | undefined;

    get updated(): number | undefined {
        return this._updated;
    }

    constructor(props: IFilterRefreshResponse) {
        if (typeof props.updated === 'number') {
            this._updated = props.updated;
        }
    }

    serialize(): IFilterRefreshResponse {
        const data: IFilterRefreshResponse = {
        };
        if (typeof this._updated !== 'undefined') {
            data.updated = this._updated;
        }
        return data;
    }

    validate(): string[] {
        const validateRequired = {
            updated: !this._updated ? true : typeof this._updated === 'number',
        };
        const isError: string[] = [];
        Object.keys(validateRequired).forEach((key) => {
            if (!(validateRequired as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: IFilterRefreshResponse): FilterRefreshResponse {
        return new FilterRefreshResponse(props);
    }

    readonly keys: { [key: string]: string } = {
        updated: 'updated',
        }
;

    mergeDeepWith(props: Partial<FilterRefreshResponse>): FilterRefreshResponse {
        const updateData: Partial<IFilterRefreshResponse> = {};
        Object.keys(props).forEach((key: keyof FilterRefreshResponse) => {
            const updateKey = this.keys[key] as keyof IFilterRefreshResponse;
            if ((props[key] as any).serialize) {
                (updateData[updateKey] as any) = (props[key] as any).serialize() as Pick<IFilterRefreshResponse, keyof IFilterRefreshResponse>;
            } else {
                (updateData[updateKey] as any) = props[key];
            }
        });
        return new FilterRefreshResponse({ ...this.serialize(), ...updateData });
    }
}