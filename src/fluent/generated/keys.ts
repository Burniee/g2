import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'eec02b3eff9a441480a4eeb898e530f5'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '9568fc3e277348eea8110eddc94b5693'
                    }
                }
            }
        }
    }
}
