import type {StructureResolver} from 'sanity/structure'
import {UserIcon} from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Profile')
    .items([
      S.listItem()
        .title('Profile')
        .icon(UserIcon)
        .child(
          S.document().schemaType('profile').documentId('singleton-profile')
        ),
      
      S.divider(),
    ]);
