/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const APIException = require('./APIException');

/**
 * Creates an instance of BaseResponseErrorException
 */
class BaseResponseErrorException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * The status of the response
         */
        this.status = null;

        /**
         * If the response is successful or not
         */
        this.success = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'status', realName: 'status' },
            { name: 'success', realName: 'success' },
        ]);
    }
}

module.exports = BaseResponseErrorException;