import { List } from "react-native-paper";
import { useState, useEffect } from "react";

import { ScrollView } from "react-native-gesture-handler";

import jasenService from "../../service/jasenService";
import { Jasen } from "../../types";

import MemberListItem from "./MemberListItem";

function MemberScreen({ navigation }: { navigation: any }) {
    const [members, setMembers] = useState<Jasen[]>([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const members = await jasenService.getAll();
            setMembers(members);
        };
        void fetchMembers(); 
    }, []);

    return (
        <ScrollView>
            <List.Section>
                {members.map((member) => (<MemberListItem key={member.jasen_id} jasen={member} navigation={navigation} />))}
            </List.Section>
        </ScrollView>
    );
}

export default MemberScreen;