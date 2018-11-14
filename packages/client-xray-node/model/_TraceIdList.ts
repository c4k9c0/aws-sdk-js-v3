import {List as _List_} from '@aws-sdk/types';

export const _TraceIdList: _List_ = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
            min: 1,
        },
    },
};