/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OrganizationRelationship
 */
class OrganizationRelationship extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.org_id = this.constructor.getValue(obj.org_id);
        this.type = this.constructor.getValue(obj.type);
        this.rel_owner_org_id = this.constructor.getValue(obj.rel_owner_org_id);
        this.rel_linked_org_id = this.constructor.getValue(obj.rel_linked_org_id);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'org_id', realName: 'org_id' },
            { name: 'type', realName: 'type' },
            { name: 'rel_owner_org_id', realName: 'rel_owner_org_id' },
            { name: 'rel_linked_org_id', realName: 'rel_linked_org_id' },
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

module.exports = OrganizationRelationship;
