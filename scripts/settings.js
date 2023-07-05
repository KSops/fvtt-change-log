import { MODULE } from './constants.js'
import { EveryoneActorTypesTagForm, EveryonePropertiesTagForm, GmActorTypesTagForm, GmPropertiesTagForm, PlayerPropertiesTagForm } from './tag-form.js'

export const registerSettings = function () {
    game.settings.registerMenu(MODULE.ID, 'gmPropertiesForm', {
        name: game.i18n.localize('changeLog.settings.gmPropertiesForm.name'),
        label: game.i18n.localize('changeLog.settings.gmPropertiesForm.label'),
        hint: game.i18n.localize('changeLog.settings.gmPropertiesForm.hint'),
        icon: 'fas fa-ballot-check',
        type: GmPropertiesTagForm,
        restricted: true,
        scope: 'world'
    })

    game.settings.registerMenu(MODULE.ID, 'gmActorTypesForm', {
        name: game.i18n.localize('changeLog.settings.gmActorTypesForm.name'),
        label: game.i18n.localize('changeLog.settings.gmActorTypesForm.label'),
        hint: game.i18n.localize('changeLog.settings.gmActorTypesForm.hint'),
        icon: 'fas fa-ballot-check',
        type: GmActorTypesTagForm,
        restricted: true,
        scope: 'world'
    })

    game.settings.registerMenu(MODULE.ID, 'everyonePropertiesForm', {
        name: game.i18n.localize('changeLog.settings.everyonePropertiesForm.name'),
        label: game.i18n.localize('changeLog.settings.everyonePropertiesForm.label'),
        hint: game.i18n.localize('changeLog.settings.everyonePropertiesForm.hint'),
        icon: 'fas fa-ballot-check',
        type: EveryonePropertiesTagForm,
        restricted: true,
        scope: 'world'
    })

    game.settings.registerMenu(MODULE.ID, 'everyoneActorTypesForm', {
        name: game.i18n.localize('changeLog.settings.everyoneActorTypesForm.name'),
        label: game.i18n.localize('changeLog.settings.everyoneActorTypesForm.label'),
        hint: game.i18n.localize('changeLog.settings.everyoneActorTypesForm.hint'),
        icon: 'fas fa-ballot-check',
        type: EveryoneActorTypesTagForm,
        restricted: true,
        scope: 'world'
    })

    game.settings.registerMenu(MODULE.ID, 'playerPropertiesForm', {
        name: game.i18n.localize('changeLog.settings.playerPropertiesForm.name'),
        label: game.i18n.localize('changeLog.settings.playerPropertiesForm.label'),
        hint: game.i18n.localize('changeLog.settings.playerPropertiesForm.hint'),
        icon: 'fas fa-ballot-check',
        type: PlayerPropertiesTagForm,
        restricted: true,
        scope: 'world'
    })

    game.settings.register(MODULE.ID, 'gmProperties', {
        name: 'GM Properties',
        scope: 'world',
        config: false,
        type: String
    })

    game.settings.register(MODULE.ID, 'gmActorTypes', {
        name: 'GM Actor Types',
        scope: 'world',
        config: false,
        type: String
    })

    game.settings.register(MODULE.ID, 'everyoneProperties', {
        name: 'Everyone Properties',
        scope: 'world',
        config: false,
        type: String
    })

    game.settings.register(MODULE.ID, 'everyoneActorTypes', {
        name: 'Everyone Actor Types',
        scope: 'world',
        config: false,
        type: String
    })

    game.settings.register(MODULE.ID, 'playerProperties', {
        name: 'Player Properties',
        scope: 'world',
        config: false,
        type: String
    })
}
