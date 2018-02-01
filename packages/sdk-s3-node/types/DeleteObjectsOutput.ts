import {_UnmarshalledDeletedObject} from './_DeletedObject';
import {_UnmarshalledError} from './_Error';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * DeleteObjectsOutput shape
 */
export interface DeleteObjectsOutput {
    /**
     * _DeletedObjects shape
     */
    Deleted?: Array<_UnmarshalledDeletedObject>;

    /**
     * If present, indicates that the requester was successfully charged for the request.
     */
    RequestCharged?: 'requester'|string;

    /**
     * _Errors shape
     */
    Errors?: Array<_UnmarshalledError>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}