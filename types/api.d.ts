/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export declare namespace API {
    export interface UserResponse {
        data: UserDetail;
    }
    export interface UserLogin {
        phone?: string;
        code?: string;
        auth_id?: number;
    }
    export interface UserHead {
        user_id: number;
        user_name: string;
        head_img: string;
        /**
         * 关注数
         */
        follow_num: number;
        /**
         * 粉丝
         */
        fans: number;
        /**
         * 收藏
         */
        collect_num: number;
        /**
         * 动态
         */
        dynamic_num: number;
        /**
         * 是否关注
         */
        is_follow: boolean;
    }
    export interface UserFollows extends UserFollow {}
    export interface UserFollowResponse extends Paging {
        data: UserFollows[];
    }
    export interface UserFollow {
        follow_user_id: number;
        follow_user_name: string;
        follow_head_img: string;
        dynamic_id: number;
        content: string;
        content_img: string;
        content_video: string;
        /**
         * 关注当前登录用户
         */
        follow_me: boolean;
        /**
         * 登录用户是否已关注
         */
        me_follow: boolean;
    }
    export interface UserDetail {
        id: number;
        phone: string;
        name: string;
        head_img: string;
        child?: UserAurh[];
    }
    export interface UserAurh {
        from_platform: string;
        auth_id: number;
        name: string;
    }
    export interface UpdateUser {
        user_id: number;
        name?: string;
        head_img?: string;
    }
    export interface TopicsInfo {
        id: number;
        topics: string;
    }
    export interface TopicSearchResponse {
        data: TopicList[];
    }
    export interface TopicResponse extends Paging {
        data: TopicList[];
    }
    export interface TopicList extends GormBaseModel, TopicData {}
    export interface TopicData {
        topics: string;
        hot_num: number;
    }
    export interface Principle {
        user: string;
        role: string;
        user_id: number;
        head_img: string;
    }
    export interface Paging {
        pagemeta: PageMeta;
    }
    export interface PageMeta {
        /**
         * 页面索引
         */
        page: number;
        /**
         * 页面数据条数限制
         */
        limit: number;
        /**
         * 总共数据条数
         */
        total: number;
        /**
         * 总页数
         */
        total_page: number;
    }
    export interface OperationsResponse extends Paging {
        data: Operation[];
    }
    export interface Operation extends GormBaseModel, NewOperation {}
    export interface NewOperation {
        type: string;
        trigger_user_unique_id: string;
        operation_plugin_id: string;
        extra?: string;
    }
    export interface NewDynamicComment {
        dynamic_id: number;
        message_img?: string[];
        parent_id?: number;
        /**
         * 根评论传动态发布作者id,回复评论传根评论作者ID
         */
        by_user_id: number;
        /**
         * 回复评论传值，主评论根为0
         */
        root_id?: number;
        message: string;
    }
    export interface NewDynamic {
        /**
         * 动态id 编辑时使用
         */
        id?: number;
        /**
         * 编辑时修改后的老图片url组
         */
        old_content_img?: string[];
        content?: string;
        content_video?: string;
        /**
         * 话题id
         */
        topic_ids?: number[];
        topics?: string[];
        title?: string;
        cover?: string;
        /**
         * true允许下载，false不允许
         */
        download: boolean;
        csrf_token?: string;
    }
    export interface MessageCenterStarsResponse extends Paging {
        data: MessageCenterStars[];
    }
    export interface MessageCenterStars {
        id: number;
        created_at: number;
        updated_at: number;
        action_user_id: number;
        action_user_name: string;
        action_head_img: string;
        dynamic_id: number;
        dynamic_user_id: number;
        /**
         * 动态发布人
         */
        dynamic_user_name: string;
        /**
         * 动态内容
         */
        dynamic_content: string;
        /**
         * 动态图片
         */
        dynamic_content_img: string;
        /**
         * 动态视频-封面图
         */
        dynamic_cover: string;
        /** 视频标题 */
        dynamic_title: string;
    }
    export interface MessageCenterFansResponse extends Paging {
        data: MessageCenterFans[];
    }
    export interface MessageCenterFans {
        id: number;
        created_at: number;
        updated_at: number;
        action_user_id: number;
        action_user_name: string;
        action_head_img: string;
        follow_user_id: number;
        /**
         * 关注当前登录用户
         */
        follow_me: boolean;
        /**
         * 登录用户是否已关注
         */
        me_follow: boolean;
    }
    export interface MessageCenterCommentResponse extends Paging {
        data: MessageCenterComment[];
    }
    export interface MessageCenterComment {
        id: number;
        created_at: number;
        updated_at: number;
        dynamic_id: number;
        user_id: number;
        user_name: string;
        head_img: string;
        /**
         * 评论内容
         */
        message: string;
        /**
         * 评论图片
         */
        message_img: string;
        root_id: number;
        /**
         * 回复用户id
         */
        by_user_id: number;
        /**
         * 回复的用户头像
         */
        by_head_img: string;
        /**
         * 回复的用户
         */
        by_user_name: string;
        /**
         * 回复的内容
         */
        by_message: string;
        /**
         * 回复的内容图片
         */
        by_message_img: string;
        /**
         * 动态发布人
         */
        dynamic_user_name: string;
        /**
         * 动态内容
         */
        dynamic_content: string;
        /**
         * 动态图片
         */
        dynamic_content_img: string;
        /**
         * 动态视频-封面图
         */
        dynamic_cover: string;
        dynamic_title: string;
    }
    export interface MessageCenter {
        /**
         * 回复评论条数
         */
        comment_num: number;
        /**
         * 粉丝关注条数
         */
        fans: number;
        /**
         * 点赞条数
         */
        stars_num: number;
    }
    export interface GormBaseModel {
        id: number;
        created_at: number;
        updated_at: number;
    }
    export interface DynamicLists extends GormBaseModel, DynamicList {}
    export interface DynamicListResponse extends Paging {
        data: DynamicLists[];
    }
    export interface DynamicListDetailResponse {
        data: DynamicLists;
    }
    export interface DynamicList {
        user_id: number;
        user_name: string;
        head_img: string;
        content: string;
        content_img: string;
        content_video: string;
        topics: string;
        topic_info: TopicsInfo[];
        title: string;
        cover: string;
        /**
         * true允许下载，false不允许
         */
        download: boolean;
        /**
         * 点赞数
         */
        stars: number;
        /**
         * 收藏数
         */
        collect: number;
        /**
         * 是否点赞
         */
        is_stars: boolean;
        /**
         * 是否收藏
         */
        is_collect: boolean;
        /**
         * 是否关注
         */
        is_follow: boolean;
        /**
         * 总评论数
         */
        comment_num: number;
    }
    export interface DynamicCommentList {
        id: number;
        created_at: number;
        updated_at: number;
        dynamic_id: number;
        root_id: number;
        parent_id: number;
        user_id: number;
        user_name: string;
        head_img: string;
        message: string;
        message_img: string;
        like_num: number;
        by_user_id: number;
        by_user_name: string;
        by_head_img: string;
        reply_num: number;
    }
    export interface DynamicComment extends Paging {
        data: DynamicCommentList[];
    }
    export interface DeleteResource {
        csrf_token?: string;
        file_name: string[];
        /**
         * 删除图片传'img' 视频传 'video'
         */
        file_type: string;
    }
    export interface AuthResponse {
        user_id: number;
        token: string;
        auth_id: number;
        head_img: string;
        name: string;
    }
    export interface ActionSucceeded {
        /**
         * 来源于哪个 API
         */
        from: string;
        /**
         * 执行状态
         */
        ok: boolean;
    }
    export interface ActionFailed {
        /**
         * 来源于哪个 API
         */
        from: string;
        /**
         * 执行状态
         */
        ok: boolean;
        reason: string;
    }
}
