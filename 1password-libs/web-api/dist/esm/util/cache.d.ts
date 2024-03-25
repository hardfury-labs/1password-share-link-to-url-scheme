import { Group } from "../model/group";
export declare class Cache {
    groupsByUuid: Record<string, Group>;
    administratorsGroup: Group | undefined;
    ownersGroup: Group | undefined;
    teamMembersGroup: Group | undefined;
    recoveryGroup: Group | undefined;
    securityGroup: Group | undefined;
    constructor();
    clearAll(): void;
    setGroups(groups: Group[]): void;
    getGroup(uuid: string): Group | undefined;
    getGroups(): Group[];
    getGroupsWithoutRecovery(): Group[];
}
