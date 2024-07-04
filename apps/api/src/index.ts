import { defineAbilityFor, projectSchema } from "@sass/auth"

const ability = defineAbilityFor({
  role: 'MEMBER', id: '1232'
})

const project = projectSchema.parse({
  id: 'project-123',
  ownerId: '123'
})

console.log(ability.can('delete', 'User'))
console.log(ability.can('delete', project))
