import * as api from "../api/group";
import { KeysetCiphertext } from "./keyset";
export interface GroupMembershipWithKeysetInit {
    readonly groupUuid: string;
    readonly keyset: KeysetCiphertext;
    readonly memberUuid: string;
    readonly role?: api.GroupMembership.Role;
    readonly state?: api.GroupMembership.State;
    readonly version?: number;
}
export declare function GroupMembershipWithKeyset(init: GroupMembershipWithKeysetInit): api.GroupMembershipWithKeyset;
