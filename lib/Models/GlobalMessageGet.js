/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GlobalMessageGet
 */
class GlobalMessageGet extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.success = this.constructor.getValue(obj.success);
        this.data = this.constructor.getValue(obj.data);
        this.handle_time = this.constructor.getValue(obj.handle_time);
        this.req_time_ctx_ms =
          this.constructor.getValue(obj.req_time_ctx_ms
     || obj._req_time_ctx_ms);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'success', realName: 'success' },
            { name: 'data', realName: 'data', array: true, type: 'GlobalMessageData' },
            { name: 'handle_time', realName: 'handle_time' },
            { name: 'req_time_ctx_ms', realName: '_req_time_ctx_ms' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = GlobalMessageGet;
