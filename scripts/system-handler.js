import { ACTOR_TYPES as CYPHERSYSTEM_ACTOR_TYPES, DERIVED_PROPERTIES as CYPHERSYSTEM_DERIVED_PROPERTIES, PROPERTIES as CYPHERSYSTEM_PROPERTIES } from './properties/cyphersystem/properties.js'
import { ACTOR_TYPES as DND5E_ACTOR_TYPES, DERIVED_PROPERTIES as DND5E_DERIVED_PROPERTIES, PROPERTIES as DND5E_PROPERTIES } from './properties/dnd5e/properties.js'
import { ACTOR_TYPES as SWADE_ACTOR_TYPES, DERIVED_PROPERTIES as SWADE_DERIVED_PROPERTIES, PROPERTIES as SWADE_PROPERTIES } from './properties/swade/properties.js'

export let ACTOR_TYPES
export let DERIVED_PROPERTIES
export let PROPERTIES

Hooks.on('init', () => {
    ACTOR_TYPES = getActorTypes()
    DERIVED_PROPERTIES = getDerivedProperties()
    PROPERTIES = getProperties()

    function getActorTypes () {
        switch (game.system.id) {
        case 'cyphersystem':
            return CYPHERSYSTEM_ACTOR_TYPES
        case 'dnd5e':
            return DND5E_ACTOR_TYPES
        case 'swade':
            return SWADE_ACTOR_TYPES
        default:
            return []
        }
    }

    function getDerivedProperties () {
        switch (game.system.id) {
        case 'cyphersystem':
            return CYPHERSYSTEM_DERIVED_PROPERTIES
        case 'dnd5e':
            return DND5E_DERIVED_PROPERTIES
        case 'swade':
            return SWADE_DERIVED_PROPERTIES
        default:
            return []
        }
    }

    function getProperties () {
        switch (game.system.id) {
        case 'cyphersystem':
            return CYPHERSYSTEM_PROPERTIES
        case 'dnd5e':
            return DND5E_PROPERTIES
        case 'swade':
            return SWADE_PROPERTIES
        default:
            return []
        }
    }
})
