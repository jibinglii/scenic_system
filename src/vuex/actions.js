// 应用mutation
export const setfId = ({
  commit
}, data) => {
  commit('changefId', data)
}
export const setScenicLists = ({
  commit
}, data) => {
  commit('changeScenicLists', data)
}
export const setmap = ({
  commit
}, data) => {
  commit('changemap', data)
}

export const isPackAction = ({
  commit
}) => {
  commit('changeIsPack', true);
}
export const isPackShow1 = ({
  commit
}) => {
  commit('changeIsPackShow1', true);
}
export const isPackShow2 = ({
  commit
}) => {
  commit('changeIsPackShow2', true);
}
export const isPackShow3 = ({
  commit
}) => {
  commit('changeIsPackShow3', true);
}

export const isTicket = ({
  commit
}) => {
  commit('changeIsTicket', true);
}
export const isTicketShow1 = ({
  commit
}) => {
  commit('changeIsTicketShow1', true);
}
export const isTicketShow2 = ({
  commit
}) => {
  commit('changeIsTicketShow2', true);
}

export const isMonitor = ({
  commit
}) => {
  commit('changeIsMonitor', true);
}
export const isMonitorShow1 = ({
  commit
}) => {
  commit('changeIsMonitorShow1', true);
}
export const isMonitorShow2 = ({
  commit
}) => {
  commit('changeIsMonitorShow2', true);
}
export const isMonitorShow3 = ({
  commit
}) => {
  commit('changeIsMonitorShow3', true);
}
