/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of RoleAssignment
 */
class RoleAssignment extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.parent_role_id = this.constructor.getValue(obj.parent_role_id);
        this.name = this.constructor.getValue(obj.name);
        this.user_id = this.constructor.getValue(obj.user_id);
        this.role_id = this.constructor.getValue(obj.role_id);
        this.active_flag = this.constructor.getValue(obj.active_flag);
        this.type = this.constructor.getValue(obj.type);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'parent_role_id', realName: 'parent_role_id' },
            { name: 'name', realName: 'name' },
            { name: 'user_id', realName: 'user_id' },
            { name: 'role_id', realName: 'role_id' },
            { name: 'active_flag', realName: 'active_flag' },
            { name: 'type', realName: 'type' },
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

module.exports = RoleAssignment;
